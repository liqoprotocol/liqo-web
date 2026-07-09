"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, type Variants } from "framer-motion";
import { Loader2, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { waitlistSchema, type WaitlistFormValues } from "@/lib/waitlist/schema";
import { ROLE_OPTIONS } from "@/lib/data/roles";
import { COMPANY_SIZE_OPTIONS } from "@/lib/data/company-sizes";
import { COUNTRY_OPTIONS } from "@/lib/data/countries";
import { submitToWaitlist, WaitlistApiError } from "@/lib/api/waitlist";

const fieldControlClass =
  "h-11 rounded-lg border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-primary-dark focus-visible:ring-primary-dark/30 aria-invalid:border-red-500/60 aria-invalid:ring-red-500/20 dark:bg-white/5 dark:aria-invalid:border-red-500/60 dark:aria-invalid:ring-red-500/20";

const fieldLabelClass = "text-gray-300 group-data-[invalid=true]/field:text-red-400";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      workEmail: "",
      company: "",
      role: undefined,
      country: undefined,
      companySize: undefined,
    },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    setSubmitError(null);
    try {
      await submitToWaitlist(values);
      onSuccess();
    } catch (err) {
      if (err instanceof WaitlistApiError) {
        setSubmitError(err.message);
        return;
      }
      setSubmitError("Something unexpected happened. Please try again.");
    }
  };

  return (
    <motion.form
      noValidate
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5"
    >
      <motion.div variants={rise} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field data-invalid={!!errors.fullName}>
          <FieldContent>
            <FieldLabel htmlFor="fullName" className={fieldLabelClass}>Full Name</FieldLabel>
            <Input
              id="fullName"
              autoComplete="name"
              placeholder="Ada Lovelace"
              aria-invalid={!!errors.fullName}
              className={fieldControlClass}
              {...register("fullName")}
            />
            <FieldError errors={[errors.fullName]} className="text-red-400" />
          </FieldContent>
        </Field>

        <Field data-invalid={!!errors.workEmail}>
          <FieldContent>
            <FieldLabel htmlFor="workEmail" className={fieldLabelClass}>Work Email</FieldLabel>
            <Input
              id="workEmail"
              type="email"
              autoComplete="email"
              placeholder="ada@company.com"
              aria-invalid={!!errors.workEmail}
              className={fieldControlClass}
              {...register("workEmail")}
            />
            <FieldError errors={[errors.workEmail]} className="text-red-400" />
          </FieldContent>
        </Field>
      </motion.div>

      <motion.div variants={rise} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field data-invalid={!!errors.role}>
          <FieldContent>
            <FieldLabel htmlFor="role" className={fieldLabelClass}>Role</FieldLabel>
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <Select
                  items={ROLE_OPTIONS}
                  value={field.value ?? null}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="role" aria-invalid={!!errors.role} className={`${fieldControlClass} w-full`}>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.role]} className="text-red-400" />
          </FieldContent>
        </Field>

        <Field data-invalid={!!errors.country}>
          <FieldContent>
            <FieldLabel htmlFor="country" className={fieldLabelClass}>Country</FieldLabel>
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <Combobox
                  items={COUNTRY_OPTIONS}
                  value={field.value ?? null}
                  onValueChange={field.onChange}
                  itemToStringLabel={(code) =>
                    COUNTRY_OPTIONS.find((c) => c.value === code)?.label ?? ""
                  }
                >
                  <ComboboxInput
                    id="country"
                    placeholder="Search for your country"
                    aria-invalid={!!errors.country}
                    className={fieldControlClass}
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No country found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item: (typeof COUNTRY_OPTIONS)[number]) => (
                        <ComboboxItem key={item.value} value={item.value}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              )}
            />
            <FieldError errors={[errors.country]} className="text-red-400" />
          </FieldContent>
        </Field>
      </motion.div>

      <motion.div variants={rise} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field data-invalid={!!errors.company}>
          <FieldContent>
            <FieldLabel htmlFor="company" className={fieldLabelClass}>
              Company <span className="text-gray-500 font-normal">(optional)</span>
            </FieldLabel>
            <Input
              id="company"
              autoComplete="organization"
              placeholder="Acme Inc."
              aria-invalid={!!errors.company}
              className={fieldControlClass}
              {...register("company")}
            />
            <FieldError errors={[errors.company]} className="text-red-400" />
          </FieldContent>
        </Field>

        <Field data-invalid={!!errors.companySize}>
          <FieldContent>
            <FieldLabel htmlFor="companySize" className={fieldLabelClass}>
              Company Size <span className="text-gray-500 font-normal">(optional)</span>
            </FieldLabel>
            <Controller
              control={control}
              name="companySize"
              render={({ field }) => (
                <Select
                  items={COMPANY_SIZE_OPTIONS}
                  value={field.value ?? null}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="companySize" className={`${fieldControlClass} w-full`}>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {COMPANY_SIZE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.companySize]} className="text-red-400" />
          </FieldContent>
        </Field>
      </motion.div>

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
        >
          <TriangleAlert size={16} className="mt-0.5 shrink-0" />
          <span>{submitError}</span>
        </motion.div>
      )}

      <motion.div variants={rise}>
        <motion.div
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full bg-white py-5 text-black hover:bg-primary-dark/80 hover:text-white disabled:opacity-40 transition-colors duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                Joining waitlist...
              </span>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
};

export default WaitlistForm;

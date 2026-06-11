import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HourlyToSalaryCalculator from "@/components/HourlyToSalaryCalculator";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator",
  description:
    "Convert your hourly wage to an annual salary. Adjust hours per week and weeks per year to match your schedule. Free, instant, no signup.",
  alternates: {
    canonical: "/hourly-to-salary",
  },
  openGraph: {
    title: "Hourly to Salary Calculator",
    description:
      "Convert your hourly wage to an annual salary. Adjust hours per week and weeks per year.",
    url: "/hourly-to-salary",
    type: "website",
  },
};

export default function HourlyToSalaryPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Hourly to Salary" },
        ]}
      />
      <HourlyToSalaryCalculator />
    </>
  );
}
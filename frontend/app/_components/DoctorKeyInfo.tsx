import Image from "next/image";
import { Star } from "lucide-react";
import { IconAndText } from "@/components/shared";

const DoctorKeyInfo = () => {
  return (
    <section className="rounded-lg flex flex-col md:flex-row items-center bg-secondary border-2">
      <Image
        src="/images/doctor-avatar.webp"
        alt="doctor"
        width={300}
        height={300}
        className="rounded-l-lg"
      />
      <div className="p-3">
        <h2 className="text-2xl font-semibold text-primary mb-1">
          Dr. Nawaz Karim Kanh
        </h2>
        <h4 className="font-semibold text-primary/70">
          MBBS, BCS, From BSMMU, Dhaka Bangladesh.
        </h4>
        <div className="flex flex-row items-center justify-between">
          <b>Eye</b>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <span className="flex flex-row items-center justify-start gap-x-1">
              {Array(5)
                .fill(null)
                .map((_, i: number) => (
                  <Star key={i} fill="gold" color="gold" size={16} />
                ))}
            </span>
            <span>(4/5)</span>
          </div>
        </div>
        <div className="space-y-2 mt-10">
          <IconAndText name="phone" text="aaa aaaaaa" />
          <IconAndText name="at-sign" text="email@example.com" />
          <IconAndText name="map-pin" text="Dhaka" />
        </div>
      </div>
    </section>
  );
};

export default DoctorKeyInfo;

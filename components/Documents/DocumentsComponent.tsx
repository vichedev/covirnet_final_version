import { pdfRoutes } from "@/constants/pdf";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FileText } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";

export default function DocumentComponent() {
  return (
    <>
      <section className="w-[95%] p-5">
        <Card>
          <CardContent className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around gap-3">
            {pdfRoutes.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 py-5 px-5 border shadow-sm shadow-gray-400 rounded-lg w-full lg:w-[25%]"
              >
                <div className="flex justify-end">
                  <FileText color="red" />
                </div>
                <h1 className="text-xl text-center">{item.title}</h1>
                <div className="flex justify-center items-center">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-full" />
                </div>
                <a
                  href={item.path}
                  download
                  className="flex gap-5 justify-center items-center bg-black text-white py-3 px-5 rounded-full"
                >
                  <ArrowDownToLine /> Descargar
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
}

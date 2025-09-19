import ContentLayout from "../layout/ContentLayout";
import Image from "next/image";

export default function BioContent() {
  return (
    <ContentLayout>
      <div className="flex justify-items-start p-4 md:p-6">
        <div className="whitespace-pre-line text-black font-helvetica text-sm">
          <Image
            src="/images/bio/1.jpg"
            alt="HomePicture"
            width={4415}
            height={1702}
            className="w-full h-auto mb-6"
            priority
          />
          <div className="max-w-xl">
            <span className="text-blue-800 font-semibold">Ștefan Șoptelea</span>
            <br />
            26 years old
            <br />
            Architect / Visual Merchandiser Specialist
            <br />
            Romania
            <br /><br />
            +4074804979
            <br />
            <a href="mailto:sop.stefan98@gmail.com" className="hover:underline hover:text-blue-600 transition">
              sop.stefan98@gmail.com
            </a>
            <br />
            <a
              href="https://linkedin.com/in/stefan-soptelea"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition"
            >
              linkedin.com/in/stefan-soptelea
            </a>
            <br /><br />
            <a
              href="/cv/stefan-soptelea-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-800 transition"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

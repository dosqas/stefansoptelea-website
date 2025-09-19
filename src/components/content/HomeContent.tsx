import ContentLayout from "../layout/ContentLayout";
import Image from "next/image";

export default function HomeContent() {
  return (
    <ContentLayout>
      <div className="flex justify-items-start p-4 md:p-6">
        <div className="whitespace-pre-line text-black font-helvetica">
          <Image
            src="/images/home/1.jpg"
            alt="HomePicture"
            width={4415}
            height={1702}
            className="w-full h-auto mb-6"
            priority
          />
          <div className="max-w-xl">
            <span className="text-blue-800 font-semibold">Hey!</span>
            <br /><br />
            My name is Ștefan Șoptelea, a 26 years old architect from Romania. 
            <br />
            Currently, I work as a Visual Merchandiser specialist at IKEA.
            <br /><br />
            <span className="text-sm md:text-base font-black font-britannic-bold text-blue-800 opacity-100">
              SOPoMATIC
            </span> is my creative playground — a space where visuals meet function, blending photography, renders, graphics, and 3D design into bold concepts that tell a story.
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
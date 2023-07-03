import EditMemberCard from "@/components/EditMemberCard";
import EditMarketingCard from "@/components/EditMarketingCard";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { TbPhotoUp } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const blog = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(file);
      setPreviewImage(reader.result);
      setIsImageUploaded(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setUploadedImage(null);
    setPreviewImage(null);
    setIsImageUploaded(false);

    const fileInput = document.getElementById("artwork");
    if (fileInput) {
      fileInput.value = ""; // Reset the value of the file input element
    }
  };

  return (
    <div className="md:ml-[270px] min-h-[100vh] text-white p-5">
      <div className="align-items-center justify-content-between flex text-white">
        <BsArrowLeftCircle className="text-[30px] flex justify-center items-center" />
        <h2 className="text-white ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left sm:text-[20px]">
          Artist Profile
        </h2>
      </div>

      <div className="flex flex-col mt-10">
        <div>
          <div className="flex  justify-between font-semibold text-xl">
            Header Image
          </div>
          <div className="mt-5 w-[90vw] md:w-[75vw] h-[207.8px] border-[1px] items-center sm:py-2 py-5 flex flex-col justify-between cursor-pointer rounded-xl smooth-hover backdrop-opacity-25 bg-black/20 border-dotted border-red-500">
            <div>
              <TbPhotoUp className="text-5xl" />
            </div>
            <div className="font-bold text-xl ">
              Drag & Drop files here to upload
            </div>

            <input
              type="file"
              id="artwork"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="artwork"
              className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer"
            >
              Browse Artwork
            </label>
          </div>
        </div>

        <div className="md:flex mt-10">
          {/* blog title and subject */}
          <div>
            <div>
              <div>Blog Title</div>
              <div className="mt-3">
                <div class="relative flex items-center w-[90vw] md:w-[45vw] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                  <input
                    class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                    type="text"
                    id="search"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>Subject</div>
              <div className="mt-3">
                <div class="relative flex items-center w-[90vw] md:w-[45vw] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                  <input
                    class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                    type="text"
                    id="search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="m-3 relative w-[400px] h-[250px] ">
            <div className="overflow-hidden w-[300px] h-auto rounded-[13px]">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Uploaded Artwork"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[13px]"
                />
              ) : (
                <Image
                  src="/../public/albumCover.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[13px]"
                />
              )}
            </div>
            {isImageUploaded && (
              <button
                className=" absolute w-[40px] h-[40px] top-0 right-0 mt-[12px] mr-[18px] bg-gray-500 backdrop-blur-sm text-gray-900 hover:text-red-500 rounded-[13px]"
                onClick={deleteImage}
              >
                <MdDelete className="text-3xl "/>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <div>Blog Description</div>
          <div className="mt-3">
            <div class="relative flex items-center w-[75vw] h-[35vh] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
              <input
                class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                type="text"
                id="search"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-10 items-center mt-10">
          <div>Reset</div>
          <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full">
            PUBLISH
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;

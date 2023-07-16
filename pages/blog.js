import React, { useState, Fragment } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { TbPhotoUp } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const Blog = ({ categories }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    subject: "",
    description: "",
    category: null, // Add category property to blogData state
  });
  const [isPublished, setIsPublished] = useState(false);

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

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setBlogData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setBlogData({
      title: "",
      subject: "",
      description: "",
      category: null, // Reset category value as well
    });
    setUploadedImage(null);
    setPreviewImage(null);
    setIsImageUploaded(false);

    const fileInput = document.getElementById("artwork");
    if (fileInput) {
      fileInput.value = ""; // Reset the value of the file input element
    }
  };
  const handlePublish = () => {
    const formData = new FormData();
    formData.append("category", blogData?.category?.id); // Append the selected category ID from blogData
    formData.append("title", blogData?.title);
    formData.append("image", uploadedImage);
    formData.append("summary", blogData?.subject);
    formData.append("description", blogData?.description);
    formData.append("status", isPublished ? "active" : "inactive");

    axios
      .post(process.env.NEXT_PUBLIC_BLOG, formData)
      .then((response) => {
        setIsPublished(true);
        setTimeout(() => {
          setIsPublished(false);
          handleReset();
        }, 2000);
      })
      .catch((error) => {
        console.error("Error posting the blog:", error);
        console.log(error.response);
      });
  };

  const handleCategorySelect = (selectedCategory) => {
    setBlogData((prevData) => ({
      ...prevData,
      category: selectedCategory,
    }));
  };

  return (
    <div className="mt-8 md:mt-0 md:ml-[270px] min-h-[100vh] text-white p-5">
      <div className="align-items-center justify-content-between flex text-white">
        {/* <BsArrowLeftCircle className="text-[30px] flex justify-center items-center" /> */}
        <h2 className="text-white md:ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left sm:text-[20px]">
          New Blog
        </h2>
      </div>

      <div className="flex flex-col mt-10">
        <div>
          <div className="flex justify-between font-semibold text-xl">
            Header Image
          </div>
          <div className="mt-5 w-[90vw] md:w-[75vw] h-[207.8px] border-[1px] items-center sm:py-2 py-5 flex flex-col justify-between cursor-pointer rounded-xl smooth-hover backdrop-opacity-25 bg-black/20 border-dotted border-red-500">
            <div>
              <TbPhotoUp className="text-5xl" />
            </div>
            <div className="font-bold text-xl pl-2 md:pl-0">
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
        <div className=" md:flex mt-10">
          {/* blog title and subject */}

          <div>
            <div>
              <div className="mt-2">Category</div>
              <div className="relative flex mt-2 items-center w-[90vw] md:w-[45vw] h-[45px]">
                <Listbox
                value={blogData.category}
                onChange={handleCategorySelect}
              >
                {({ open }) => (
                  <>
                    <div className="relative">
                      <Listbox.Button className="relative w-[90vw] md:w-[45vw] cursor-default rounded-lg border backdrop-opacity-25 bg-white/10 border-white/40 p-2">
                        <span className="block truncate">
                          {blogData.category
                            ? blogData.category.title
                            : "Select Category"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <BsChevronDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                        {categories.map((cat) => (
                          <Listbox.Option
                            key={cat.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-white/10 text-gray-200"
                                  : "text-gray-200"
                              }`
                            }
                            value={cat}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {cat.title}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <TiTick
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              </div>
            </div>
            <div className="mt-2">
              <div>Blog Title</div>
              <div className="mt-2">
                <div className="relative flex items-center w-[90vw] md:w-[45vw] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                  <input
                    className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                    type="text"
                    id="title"
                    value={blogData.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div>Subject</div>
              <div className="mt-2">
                <div className="relative flex items-center w-[90vw] md:w-[45vw] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                  <input
                    className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                    type="text"
                    id="subject"
                    value={blogData.subject}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" m-3 relative w-[full] md:w-[400px] h-[250px] overflow-hidden">
            <div className="overflow-hidden w-[full] h-auto rounded-[13px]">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Uploaded Artwork"
                  className="rounded-[13px]"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/400x250"
                  alt="Default Image"
                  className="rounded-[13px]"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            {isImageUploaded && (
              <button
                className="absolute w-[30px] h-[auto] top-0 right-0 mt-[12px] mr-[18px] bg-gray-500 backdrop-blur-sm text-gray-900 hover:text-red-500 rounded-lg"
                onClick={deleteImage}
              >
                <MdDelete className="text-3xl" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:pr-3">
          <div>Blog Description</div>
          <div className="mt-3">
            <div className="relative flex items-center w-full h-[35vh] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
              <textarea
                className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2 resize-none"
                id="description"
                value={blogData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-10 items-center mt-10 md:mr-3">
          <button className="text-gray-200" onClick={handleReset}>
            Reset
          </button>
          <button
            className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full"
            onClick={handlePublish}
          >
            PUBLISH
          </button>
        </div>
      </div>

      {isPublished && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-lg">
          <div className="text-white bg-black p-10 rounded-lg">
            <p>Your blog has been posted!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BLOG_CATEGORY);
    const categories = response.data;
    return {
      props: { categories },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: { categories: [] },
    };
  }
}

export default Blog;

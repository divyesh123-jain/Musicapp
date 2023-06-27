// import DesktopSidebar from "@/components/DesktopSidebar";
import Image from "next/image";
import styles from "../sass/_em-artistProfile.module.scss";
// import "../sass/_em-artistProfile.scss";
import React, { useState } from "react";
import { BsArrowLeftCircle, BsClock, BsMusicNote } from "react-icons/bs";
import { BiSolidCrown } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { TiMediaPlay, TiDownload } from "react-icons/ti";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const ArtistProfile = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const options = [
    {
      id: 1,
      image: "/../public/imggg.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
    {
      id: 2,
      image: "img.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
    {
      id: 3,
      image: "img.png",
      title: "I Don't Think That I Like Her",
      writer: "Charlie Puth",
      time: "10:00",
    },
  ];

  return (
    <>
      <div className={`${styles["em-db-content"]}`}>
        <div
          className={`${styles["em-db-content-title"]} d-flex align-items-center justify-content-between`}
        >
          <BsArrowLeftCircle className={styles["em-db-content-title-icon"]} />
          <h2 className="text-white">Artist Profile</h2>
        </div>

        <div
          className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-10 space-x-2`}
        >
          <div className="grid1">
            <div className="font-bold text-xl">Overview</div>
            <div className=" flex justify-center items-center">
              <Image
                src="/../public/imggg.png"
                alt="artist-profile"
                width={150}
                height={150}
                className={`rounded-full mt-3 flex justify-center items-center`}
              />
            </div>
            <div className=" font-semibold text-2xl flex justify-center items-center">
              Ari Elkins
            </div>
            <div className="flex justify-between mt-3 p-3 bg-gray-900 rounded-full text-gray-300">
              <div>
                <IoTicket className="text-5xl flex justify-center items-center ml-4 mt-2" />
              </div>
              <div className="flex flex-col mr-3">
                <div>Membership:</div>
                <div>AWB | Artist With Benefit</div>
                <div>1496 Followers</div>
              </div>
            </div>

            <div></div>
          </div>
          <div className="col-lg-5 mt-10 p-3">
            <ul
              className={`${styles["em-db-music"]} row gap-3 grid grid-cols-2`}
            >
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Music</span>
                <em>567</em>
                {/* <em>{dashboardInfo?.totalMusic}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>EP / Albums</span>
                <em>30</em>
                {/* <em>{dashboardInfo?.albums?.total}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Upcoming Music</span>
                <em>16</em>
                {/* <em>{dashboardInfo?.totalUpcomingMusic}</em> */}
              </li>
              <li className="col m-0">
                {/* <img
                    width="24"
                    height="24"
                    src="/../public/sample.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                <BsMusicNote className="img-fluid" />
                <span>Published Music</span>
                <em>760</em>
                {/* <em>{dashboardInfo?.totalPublishedMusic}</em> */}
              </li>
            </ul>
          </div>
          <div className={`${styles["em-db-subcription"]}`}>
            <div className="flex justify-between text-xl font-bold">
              <div>Subscription</div>
              <div>View All</div>
            </div>
            <div className="flex flex-col space-y-4 mt-9 ">
              <div>
                <div className={`${styles["em-db-individual"]} py-1 px-2`}>
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles["em-db-individual"]} py-1 px-2`}>
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles["em-db-individual"]} py-1 px-2`}>
                  <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
                  <div className="mr-10">
                    <div>AWB | Artists with Benefits</div>
                    <div className="text-sm">Date:24 June 2023</div>
                    <div className="text-sm">Total paid: $14.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5 font-semibold text-xl">
          <div>Active Add Ons</div>
          <div>View All</div>
        </div>
        <div className="mt-5 flex space-x-2">
          <div className="p-5 border-2 rounded-lg border-gray-700 w-[30vw]">
            <div className="flex justify-between">
              <div>Marketing Campaign</div>
              <div>149.99$ / annum</div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Social Media Ads</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Youtube Ads</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Influencer</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Email</div>{" "}
              </div>
            </div>
          </div>
          <div className="p-5 border-2 rounded-lg border-gray-700 w-[30vw]">
            <div className="flex justify-between">
              <div>Marketing Campaign</div>
              <div>149.99$ / annum</div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Social Media Ads</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Youtube Ads</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Influencer</div>{" "}
              </div>
              <div className="flex ">
                {" "}
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>{" "}
                <div>Email</div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-semibold mt-5">Albums</div>

        <div className="mt-4 flex">
          <div className="flex flex-col w-[fit] hover:bg-gray-200 p-3 rounded-xl">
            <Image
              src="/../public/albumCover.jpg"
              width={200}
              height={200}
              className="rounded-xl"
            />
            <div className="font-semibold text-lg mt-3 ml-1">
              Somebody Like U
            </div>
            <div className="text-gray-600 text-base ml-1">Alan Walker</div>
          </div>
        </div>

        <div className="text-xl font-semibold mt-5">All Singles</div>

        <div>
          {options.map((option) => (
            <label
              key={option.id}
              className="flex justify-between items-center p-2 last:border-b-0 bg-gray-300 cursor-pointer mb-4 rounded-lg"
            >
              <input
                type="checkbox"
                className="hidden"
                checked={checkedItems.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              <div className="flex items-center">
                <div className="mr-4">
                  {checkedItems.includes(option.id) ? (
                    <MdCheckBox className="w-6 h-6 text-red-500" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="w-6 h-6" />
                  )}
                </div>
                <Image
                  src="/../public/albumCover.jpg"
                  alt="album cover"
                  width={50}
                  height={50}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-lg font-bold">{option.title}</p>
                  <p className="text-sm text-gray-600">{option.writer}</p>
                </div>
              </div>
              <div className="flex justify-between w-[25%]">
                <div className="flex items-center mx-4">
                  <span className="text-gray-500">
                    <BsClock />
                    {option.time}
                  </span>
                </div>
                <div className="flex items-center">
                  <TiMediaPlay className="w-6 h-6 text-black" />
                  <TiDownload className="w-6 h-6 text-black ml-4" />
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-between border-2 pt-4 pb-4 pl-8 pr-8 items-center rounded-3xl text-lg">
          <div>Selected: 1</div>
          <div className="flex justify-evenly space-x-16 items-center font-bold">
            <div>Unselect all</div>
            <div>Select All</div>
            <div className="pl-16 pr-16 pt-4 pb-4 w-[fit] bg-red-400 rounded-full font-semi">
              Download
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistProfile;

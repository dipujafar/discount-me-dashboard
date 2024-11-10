import cardImage from "@/assets/image/cardImage.png";
import Image from "next/image";
import borderImage from "@/assets/image/border.png";

type TProps = {
  price: string;
  title: string;
  description: string;
};

const CouponCard = ({ data }: { data: TProps }) => {
  return (
    <div className="relative">
      <Image
        src={cardImage}
        alt="cardImage"
        className="hidden xl:block"
      ></Image>
      <div className="flex flex-col lg:flex-row justify-center items-center xl:gap-x-5 gap-x-2 xl:absolute xl:inset-0 bg-primary-white xl:bg-transparent p-2 xl:p-0 rounded">
        <div>
          <h2 className="text-primary-green text-xl  font-medium">Price</h2>
          <p className="text-primary-orange text-xl lg:font-bold">
            ${data?.price}
          </p>
        </div>
        <Image
          src={borderImage}
          alt="border_image"
          className="hidden xl:block"
        ></Image>
        <div>
          <h2 className="text-primary-black lg:text-xl font-bold">
            {data?.title}
          </h2>
          <p className="text-primary-black/70 ">${data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

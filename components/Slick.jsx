
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div className="pt-4 overflow-hidden">
            <Slider {...settings}>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/Dahua_Technology.png?alt=media&token=ac939021-fab5-4555-b558-521a7b76f926"
                            alt='dahua'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/nemtek-logo.png?alt=media&token=6f6ef7a9-9084-42ee-b048-dde3f7b0cc4b"
                            alt='nemtek'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/hik-vision.png?alt=media&token=9f25fcc0-2fbf-4a67-b30d-77dd4f5e282c"
                            alt='hik vision'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/zkteco.png?alt=media&token=059e1f97-b2a3-4e31-83e2-d8aedf3f5e5c"
                            alt='zk teco'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/IDS.jpg?alt=media&token=5a6f2211-4c5f-4f7a-9a35-5989436a6323"
                            alt='inhep digital security'
                            width={130}
                            height={130}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/paradox-security.png?alt=media&token=ed443bc9-5620-4675-9013-bc260ddde74a"
                            alt='Paradox security'
                            width={400}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/takex.png?alt=media&token=2c3fa936-5664-45b9-9076-ceeab3629890"
                            alt='takex'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/wolf.png?alt=media&token=8f2ab41f-7951-4a60-810b-f20e59fab366"
                            alt='wolf protection'
                            width={120}
                            height={120}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/no-jack.png?alt=media&token=2836c95d-020c-4d56-b850-dfbba7152de3"
                            alt='no jack'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
  }

export default Slick
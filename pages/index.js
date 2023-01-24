import Image from "next/image";
import Card from "../components/home/homePage-Card";
import Link from "next/link";

import { BsTelephone, BsDownload } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";


function Home() {
  return (
    <div className="font-nunitoSans bg-[#EFF0FC]">
      <headerr className="headerContainer">
        <span className="headerBrand">MasterPay</span>
        <div className="headerNav1">
          <Link href="/login">
          <span className="btn w-32 rounded bg-[#1BA098] border-white">Login</span>
          </Link>
          <Link href="/signup">
          <span className="btn w-32 rounded bg-[#1BA098] border-white">Sign Up</span>
          </Link>
        </div>
      </headerr>
      <section className="homePageSection">
        <div className="homePageAsside">
          <span className="homePageTitle">Awesome App <br />For Saving <strong className="text-[#1BA098]">Time.</strong></span>
          <span className="homePageDecript">We bring you a mobile app for banking problems that oftenly wasting much of your times.</span>
          <button className="btn homePageFirstButton">Try It Free</button>
        </div>
        <div className="homePageImageAsside">
          <Image src="/vector4.png" width={700} height={200} alt=""/>
          <Image src="/pngphone.png" width={439} height={846} alt="phone" className="phoneImg1"/>
        </div>
      </section>
      <section className="homePageSection2">
        <h1 className="section-2-title"><strong className="text-[#1BA098]">About</strong> the Application.</h1>
        <p className="section-2-decript">We have some great features from the application and its totally free to use by all users around the world.</p>
        <div className="cardContainer">
          <Card
            class="cardClass"
            image={<BsTelephone className="text-[#1BA098]"/>}
            title="24/7 Support"
            decription="We have 24/7 contact support so you can contact us whenever you want and we will respond it."
          />
          <Card
            class="cardClass"
            image={<HiOutlineLockClosed className="text-[#1BA098]"/>}
            title="Data Privacy"
            decription="We make sure your data is safe in our database and we will encrypt any data you submitted to us."
          />
          <Card
            class="cardClass"
            image={<BsDownload className="text-[#1BA098]"/>}
            title="Easy Download"
            decription="Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store."
          />
        </div>
      </section>
      <section className="partnersContainer">
        <div className="titleContainer">
          <span className="partnerTitle">100+ <strong className="text-[#1BA098]">Trusted</strong> <br />Partners.
          </span>
          <span className="partnerDecript">We have reached global level and have 100+ brand partners around the globe.</span>
        </div>
        <div className="partnerList">
          <Image src="/airbnb.png" width={150} height={46} alt="airbnb" />
          <Image src="/canon.png" width={150} height={46} alt="canon" className="self-center"/>
          <Image src="/dell.png" width={150} height={46} alt="dell" />
          <Image src="/microsoft.png" width={150} height={46} alt="microsoft" />
          <Image src="/dropbox.png" width={150} height={46} alt="dropbox" />
          <Image src="/h&m.png" width={150} height={46} alt="h&m" className="self-end"/>
        </div>
      </section>
      <section className="featursContainer">
        <Image src="/pngphone2.png" width={350} height={300} alt="phone"className="featursImg" />
        <div className="featurs">
          <span className="section-2-title">All The <strong className="text-[#1BA098]">Great</strong> MasterPay Features.</span>
          <div className="featursListContainer">
            <div className="featursList">
                <span className="text-[#3A3D42]"><strong className="text-[#1BA098]">1.</strong> Small Fee</span><br/>
                <span className="text-[#4D5055]">We only charge 5% of every success transaction done in MasterPay app.</span>
            </div>
            <div className="featursList">
              <span className="text-[#3A3D42]"><strong className="text-[#1BA098]">2.</strong> Data Secured</span><br/>
              <span className="text-[#4D5055]">All your data is secured properly in our system and it&apos;s encrypted.</span>
            </div>
            <div className="featursList">
              <span className="text-[#3A3D42]"><strong className="text-[#1BA098]">3.</strong> User Friendly</span><br/>
              <span className="text-[#4D5055]">MasterPay come up with modern and sleek design and not complicated.</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="footerContainer">
        <span className="footerBrand">MasterPay</span>
        <p className="footerDecript">Simplify financial needs and saving much time in banking needs with one single app.</p>
        <hr className="my-10"/>
          <div className="copyright">
            <span>2020 MasterPay. All right reserved.</span>
          <div className="contact">
            <div>
              <BsTelephone className="contactIcon"/>
              <span className="contactList">+62 5637 8882 9901</span>
            </div>
            <div>
              <CiMail className="contactIcon"/>
              <span className="contactList">contact@masterpay.com</span>
            </div>
            </div>
          </div>
      </footer>
    </div>
  )
}


export default Home;
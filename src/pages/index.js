import Head from "next/head";
import { Inter } from "next/font/google";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutePage from "@/routes";
import { getAppDetial } from "@/services";
import { decrypt, encrypt, get_token } from "@/utils/helpers";
import { bannerAry } from "../../public/assets/sampleArry";
import { useDispatch } from "react-redux";
import { app_detailAction } from "@/store/sliceContainer/appDetailSlice";
// import { setAppId } from "@/services/axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tenantName, setTenantName] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    // console.log(url);
    const tenantName = url.split(".local")[0];
  }, []);

  const fetchAppDetail = async (tenantName) => {
    const token = get_token();
    const formData = {
      // 'domain': tenantName
      // domain: "https://narayna.videocrypt.in/webstaging/",
      domain: "https://educrypt.netlify.app"
    };
    const response_content_service = await getAppDetial(
      encrypt(JSON.stringify(formData), token)
    );
    const app_detail_data = decrypt(response_content_service.data, token);

    if (app_detail_data.status) {
      const data = app_detail_data.data;
      // setAppId(data.id)
      localStorage.setItem('appId', data.id);
      dispatch(app_detailAction(data));
    }
  };

  fetchAppDetail();

  return (
    <>
      <Head>
        <title>EduCrypt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Bootstrap CDN --> */}

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>

        {/* <!-- Google Font --> */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Reddit+Sans+Condensed:wght@200..900&family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />

        {/* <!-- Font Awesome CDN --> */}
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* <!-- Owl-Carousel --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </Head>
      {/* <BrowserRouter> */}
      <RoutePage tenantName={tenantName} />
      {/* </BrowserRouter> */}
    </>
  );
}

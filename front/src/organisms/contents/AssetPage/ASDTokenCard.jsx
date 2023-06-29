import { useState, useEffect } from "react";
import { Card, Img, Infos, Text, Stats, Links } from "./styled";
import { Button } from "../../components";
import axios from "axios";

export const ASDTokenCard = () => {
  const [logoURL, setLogoURL] = useState(null);

  const APIURL = process.env.REACT_APP_AXIOS_URL;

  const getLogo = async (logo) => {
    const { data } = await axios.get(`${APIURL}/aws/signedurl/${logo}`);
    const response = data.signedURL;
    return response;
  };

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await getLogo("logo.png");
      setLogoURL(logo);
    };
    fetchLogo();
  }, );

  return (
    <>
      <Card>
        <Img>
          {logoURL && <img src={logoURL} alt="ASD Logo" />}
        </Img>
        <Infos>
          <h2>ASD</h2>
          <h4>SolarSwap의 공식 통화</h4>
        </Infos>
        <Text>내 보유수량 :</Text>
        <Stats>
          <li>
            <h3>1.00</h3>
            <h4>$ USD</h4>
          </li>
          <li>
            <h3>1350.00</h3>
            <h4>￦ KRW</h4>
          </li>
        </Stats>
        <Links>
          <Button width={"45%"} height={"40px"} colors={"blue"}>
            구매하기
          </Button>
          <Button width={"45%"} height={"40px"} colors={"blue"}>
            판매하기
          </Button>
        </Links>
      </Card>
    </>
  );
};

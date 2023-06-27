import { Card, Img , Infos, Text, Stats, Links, ContentWrap} from "./styled"
import { Button } from "../../components"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getMarketAPI = async(coinId) => {
    const res = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`, 
    {
        headers : {
            'X-CMC_PRO_API_KEY' : process.env.REACT_APP_CoinAPI,
        },
        params :{
            id : coinId
        }
    });
    console.log(res.data)
    return res.data
}

export const MypageTable = () => {

    const data = [
        { 
            name: 'Ethereum', 
            logo: 'images/logo-ethereum.png',
            description: '디지털 미래를 위한 통화, Ethereum App의 공식통화',
            MyValue : "100" , 
            ValueUSD : "$111", 
            ValueKRW : "1231" 
        },
        { 
            name: 'Arbitrum', 
            logo: 'images/logo-arbitrum.png',
            description: 'Layer 2 의 선두주자',
            MyValue : "100" , 
            ValueUSD : "$111", 
            ValueKRW : "1231" 
        },
        { 
            name: 'Tether USDT', 
            logo: 'images/logo-tether.png',
            description: '통화표준 USD 의 가치를 보장',
            MyValue : "100" , 
            ValueUSD : "$111", 
            ValueKRW : "1231" 
        },
        { 
            name: 'ASD', 
            logo: 'images/logo.png',
            description: 'SolarSwap 의 공식통화',
            MyValue : "100" , 
            ValueUSD : "$111", 
            ValueKRW : "1231" 
        }
    ]

    return (
        <>
        <ContentWrap>
        {data.map((item, index) => (
            <Card key={index}>
                <Img>
                    <img src={item.logo} alt={item.name} />
                    <div>거래 그래프</div>
                </Img>
                <Infos>
                    <h2>{item.name}</h2>
                    <h4>{item.description}</h4>
                </Infos>
                <Text>내 보유수량 :</Text>
                <Stats>
                    <li>
                        <h3>{item.ValueUSD}</h3>
                        <h4>Doller Value</h4>
                    </li>
                    <li>
                        <h3>{item.ValueKRW}</h3>
                        <h4>KR Value</h4>
                    </li>
                </Stats>
                <Links>
                    <Button width={"45%"} height={"40px"} colors={"blue"}>구매하기</Button>
                    <Button width={"45%"} height={"40px"} colors={"blue"}>판매하기</Button>
                </Links>
            </Card>
        ))}
    </ContentWrap>
        </>
    )
}
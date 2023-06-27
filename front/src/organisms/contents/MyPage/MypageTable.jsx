import { Card, Img , Infos, Text, Stats, Links} from "./styled"
import { Button } from "../../components"

export const MypageTable = () => {

    return (
        <>
            <Card>
                <Img>
                    <img src="images/logo-ethereum.png" />
                    <div>
                        거래 그래프
                    </div>
                </Img>
                <Infos>
                    <h2>Etereum</h2>
                    <h4> 디지털 미래를 위한 통화, Ethereum App의 공식통화 </h4>
                </Infos>
                <Text> 내 보유수량 : </Text>
                <Stats>
                    <li>
                        <h3>Value</h3>
                        <h4>Doller Value</h4>
                    </li>
                    <li>
                        <h3>Value</h3>
                        <h4>KR Value</h4>
                    </li>
                </Stats>
                <Links>
                    <Button width={"45%"} height={"40px"}colors={"blue"}>구매하기</Button>
                    <Button width={"45%"} height={"40px"}colors={"blue"}>판매하기</Button>
                </Links>
            </Card>
        </>
    )
}
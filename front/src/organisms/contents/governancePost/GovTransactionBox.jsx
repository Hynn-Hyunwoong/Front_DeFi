import {TransactionArea, TransactionBox, Span} from "./style";
import { Link } from "react-router-dom";




export const GovTransactionBox = () => {

    return <>
        <TransactionArea>
            <TransactionBox>
                <Span margin="0 0 0 20px">Transaction</Span>
            </TransactionBox>       
            <TransactionBox>
                <Link to={"https://etherscan.io/"}>
                    TransactionAddress
                </Link>
            </TransactionBox>
        </TransactionArea>
    </>
}
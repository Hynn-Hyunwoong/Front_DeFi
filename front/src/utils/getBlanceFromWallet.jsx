import { ethers } from "ethers";

export const getWalletBalance = async (provider, address, tokenAddress) => {
    const contract = new ethers.Contract(
        tokenAddress,
        ['function balanceOf(address owner) view returns (uint256)'],
        provider
    )
    const balance = await contract.balanceOf(address);

    return ethers.formatUnits(balance, 18);
}
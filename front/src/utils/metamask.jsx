export const metaMask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const queryClient = useQueryClient();

  const fetchAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  const handleLogin = async () => {
    try {
      if (!account) {
        setIsloading(true);
        const data = await queryClient.fetchQuery(["account"], fetchAccount);
        setAccount(data);
        setIsLogin(true);
        setIsloading(false);
      }
    } catch (e) {
      console.log(e);
      setIsloading(false);
    }
  };
};

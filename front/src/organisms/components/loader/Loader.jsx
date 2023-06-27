import { GlobalStyle } from "./styled";
export const Loader = () => {
  return (
    <>
      <GlobalStyle />
      <div className="body">
        <div class="scene">
          <div class="shadow"></div>
          <div class="jumper">
            <div class="spinner">
              <div class="scaler">
                <div class="loader">
                  <div class="cuboid">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

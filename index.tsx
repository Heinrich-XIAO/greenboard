import GreenpillModule from "@tsci/Heinrich-XIAO.greenpill"
import { MicroModBoard } from "@tscircuit/common"

export default () => (
  <breakout>
    <MicroModBoard
      name="micromod"
      connections={{
        GND2: "net.GND"
      }}
    />
    <trace
      from="net.VDD"
      to=".micromod > .V3_3_2"
    />
    <trace
      from="net.GND"
      to=".micromod > .GND2"
    />
    <GreenpillModule
      name="a"
      pcbY={-1}
      pcbX={0}
      resetButton={false}
      schX={20}
      PC0={[".micromod > .SPI_N_CS"]}
      PC1={[".micromod > .I2C_SDA1"]}
      PC2={[".micromod > .I2C_SCL1"]}
      PC3={[".micromod > .G2"]}
      PC4={[".micromod > .G3"]}
      PC5={[".micromod > .SPI_SCK"]}
      PC6={[".micromod > .SPI_SDO1"]}
      PC7={[".micromod > .SPI_SDI1"]}
      PD2={[".micromod > .G7"]}
      // PD3={[".micromod > .G8"]}
      PD4={[".micromod > .A0"]}
    />
    <trace
      from="net.SWIO"
      to=".micromod > .SWDIO"
    />
    <trace
      from="net.RST"
      to=".micromod > .N_RESET"
    />
  </breakout>
)

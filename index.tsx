import GreenpillModule from "@tsci/Heinrich-XIAO.greenpill"
import { MicroModBoard } from "@tscircuit/common"

export default () => (
  <MicroModBoard name="micromod"
    connections={{
      GND2: "net.GND"
    }}
    schX={20}
  >
    <GreenpillModule
      name="a"
      pcbY={0}
      pcbX={-1}
      resetButton={false}
    />
    <trace from="net.GND" to=".micromod > .GND2" />
  </MicroModBoard>
)

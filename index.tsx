import GreenpillModule from "@tsci/Heinrich-XIAO.greenpill"
import { MicroModBoard } from "@tscircuit/common"

export default () => (
  <group>
    <MicroModBoard
      name="micromod"
      connections={{
        GND2: "net.GND"
      }}
      schX={20}
    >
    </MicroModBoard>
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
    />
  </group>
)

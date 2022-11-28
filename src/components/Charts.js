import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";



const Chart = ({flavorData}) => {

  const realData = [
    {
      subject: "華麗豐富", // 華やか
      score:flavorData[0],
      fullMark: 1
    },
    {
      subject: "香醇", // 芳醇
      score:flavorData[1],
      fullMark: 1
    },
    {
      subject: "濃厚", // 重厚
      score:flavorData[2],
      fullMark: 1
    },
    {
      subject: "溫和順口", // 穏やか
      score:flavorData[3],
      fullMark: 1
    },
    {
      subject: "擊喉感", // ドライ
      score:flavorData[4],
      fullMark: 1
    },
    {
      subject: "清爽", // 軽快
      score:flavorData[5],
      fullMark: 1
    }
  ]
  

  return (
    <RadarChart
      cx='50%'
      cy='50%'
      outerRadius={120}
      width={330}
      height={300}
      data={realData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="flavor"
        dataKey="score"
        stroke="#BD2F26"
        fill="#BD2F26"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default Chart
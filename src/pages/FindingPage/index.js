import { Title } from "@COM/Title";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import SakeCardA from "@PAGE/Main/SakeCardA";
import useCollectedSake from "@HOOK/useCollectSake";
import { useEffect, useState } from "react";

const heights = [160, 200, 130, 270, 200, 150, 240, 180, 150];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

const FindingPage = () => {
  const [list, setList] = useState([]);
  const { getSake } = useCollectedSake();

  useEffect(() => {
    
      
    let l = getSake();
    setList(
      l.map((sid) => ({
        id: sid,
      }))
    );
  }, []);
  return (
    <div className="container mx-auto">
      <Title cn="追蹤清單" jp="日本酒との出会い" />

      {/* <Masonry columns={2} spacing={2}>
          {heights.map((height, index) => (
            <Item key={index} className="rounded">
              <img src={`${process.env.PUBLIC_URL}/media/find${index+1}.jpg`} 
              alt="sake"
              className='h-100 rounded img-fluid' />
            </Item>
          ))}
        </Masonry> */}

      <Masonry columns={2} spacing={2}>
        {list.map(({ id }, index) => (
          <Item key={index} className="rounded">
            <SakeCardA
              id={id}
              img={`find${index + 1}.jpg`}
              furigana={"DD"}
              name={"測試"}
              maker={"測試酒場"}
              area={"大阪"}
              tags={null}
              chart={null}
            />
          </Item>
        ))}
      </Masonry>
    </div>
  );
};

export default FindingPage;

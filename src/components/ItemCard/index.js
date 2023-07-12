import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSake } from "@/MyContext";
import axios from "axios";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { HeartFill, Heart, PencilSquare, GeoAlt } from "react-bootstrap-icons";
import ScrollableTabsButtonVisible from "./ScrollableTabsButtonVisible";
import Chart from "./Charts";
import Loading from "@COM/Loading";

const KeepBtn = styled.button`
  position: absolute;
  right: 0.8em;
  top: 1em;
  background: none;
  border: none;
`;

const ItemCard = ({ area, chart, id, maker, name, tags, isLike }) => {
  const sakeContext = useSake();
  const navigate = useNavigate();
  const [like, setLike] = useState(isLike);
  const [tagsIndex, setTagsIndex] = useState([]);
  const [mainPics, setMainPics] = useState(["", ""]);
  const [loading, setLoading] = useState(true);
  const [recommendation, setRecommendation] = useState(null);

  const toRecommendation = (e) => {
    e.preventDefault();
    if(window.location.hash.includes("/search") && sakeContext?.goToSearch){
      sakeContext.goToSearch(recommendation.name)
      window.scrollTo(0, 0);
    }else{
      navigate("/search", { state: { sakeName: recommendation.name } });
      window.scrollTo(0, 0);
    }
  };

  let tagsToText = (numArr, refArr) => {
    if (numArr) {
      return refArr.filter((item) => numArr.indexOf(item.id) > -1);
    }
  };

  useEffect(() => {
    const getTagsIndex = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/aki168/sakeData/main/flavor-tags.json"
        )
        .then((result) => {
          if (result?.data) {
            setTagsIndex(result.data.tags);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getTagsIndex();
  }, []);

  useEffect(() => {
    const defaults = [
      `${process.env.PUBLIC_URL}/media/005.jpg`,
      `${process.env.PUBLIC_URL}/media/find3.jpg`,
      `${process.env.PUBLIC_URL}/media/001.jpg`,
      `${process.env.PUBLIC_URL}/media/find7.jpg`,
    ];
    const getPic = async () => {
      let url =
        "https://sakeholic-web-crawler-aki168.vercel.app/get_sake_images";
      await axios
        .post(url, { name, brewery: maker })
        .then((response) => {
          if (response) {
            setMainPics(response?.data?.res || defaults);
          } else {
            setMainPics(defaults);
          }
        })
        .catch((err) => {
          console.error(err);
          setMainPics(defaults);
        });
      setLoading(false);
    };
    getPic();
  }, []);

  useEffect(() => {
    const getRecommendation = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/aki168/sakeholic-web-crawler/main/export_data/recommendations.json"
        )
        .then((result) => {
          setRecommendation(result?.data[0][id] || null);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getRecommendation();
  }, []);
  return (
    <Card className="bg-light p-3" style={{ position: "relative" }}>
      <KeepBtn onClick={() => setLike((prev) => !prev)}>
        {like ? (
          <HeartFill className={"text-primary"} size={28} />
        ) : (
          <Heart className={"text-dark"} size={28} />
        )}
      </KeepBtn>
      <CardContent className="row gx-3 p-0 py-2 p-md-4">
        <div className="col col-xl-7 mb-5">
          <p>No. {id}</p>
          <h2 className="fw-bold">{name}</h2>
          <div className="d-flex gap-5">
            <div className="d-flex align-items-center">
              <PencilSquare size={21} className="text-dark me-2" />
              <p className="text-secondary fw-bold mb-0">
                {maker ? (
                  maker
                ) : (
                  <small className="text-info fw-light"> -- </small>
                )}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <GeoAlt size={21} className="text-dark me-2" />
              <p className="text-secondary fw-bold mb-0">{area}</p>
            </div>
          </div>
          {tags && (
            <ScrollableTabsButtonVisible
              currentData={tagsToText(tags, tagsIndex)}
            />
          )}
          {loading ? (
            <div className="py-5">
              <Loading full={false} />
            </div>
          ) : (
            <div className="d-flex my-2 justify-content-center flex-wrap">
              {mainPics.map((pic, i) => (
                <img
                  key={i}
                  src={pic}
                  alt={`${name}-${i}`}
                  className="rounded p-1 img-fluid"
                />
              ))}
            </div>
          )}
        </div>
        <div className="col-12 col-xl-5 mb-5 my-auto">
          <p className="fw-bolder text-dark py-auto">風味分析</p>
          {chart[0] ? (
            <Chart flavorData={chart} />
          ) : (
            <div
              className="px-auto py-5 border-info bg-info rounded text-light text-center"
              style={{ verticalAlign: "center" }}
            >
              暫無資料...
            </div>
          )}
          <p className="fw-bold text-secondary">
            根據日本網友數據分析呈現的風味表
          </p>
        </div>
        {recommendation && (
          <>
            <p className="fw-bold">你可能會喜歡...</p>
            <span className="text-info" style={{ fontSize: "12px" }}>
              (演算法分析計算結果)
            </span>
            <a
              onClick={toRecommendation}
              href="!#"
              className="py-2 px-4 border rounded"
            >
              <span className="text-info fw-bold" style={{ fontSize: "12px" }}>
                No. {recommendation.id}
              </span>
              <p className="pb-3 fw-bold">{recommendation.name}</p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <PencilSquare size={21} className="text-dark me-2" />
                  <p className="text-secondary fw-bold mb-0">
                    {recommendation.brewery_name}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <GeoAlt size={21} className="text-dark me-2" />
                  <p className="text-secondary fw-bold mb-0">
                    {recommendation.area}
                  </p>
                </div>
              </div>
            </a>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;

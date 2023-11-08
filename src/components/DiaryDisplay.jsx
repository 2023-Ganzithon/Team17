
/* eslint-disable react/prop-types */
import {
    DiaryContainer,
    ResultTitle,
    Divider,
    CardContainer,
    CardTitle,
    CardContent,
    ActionListItem,
  } from "./CommonStyles";
  
  import {
    LoadingOutlined
  } from "@ant-design/icons";
  import { Image } from "antd";
  import styled from "styled-components";
  
  const ThumbnailImage = styled(Image)`
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  `;
  
 
  // eslint-disable-next-line react/prop-types
  const DiaryDisplay = ({ data, isLoading }) => {
    return (
      <DiaryContainer>
        {isLoading && (
          <>
            분석중...
            <LoadingOutlined />
          </>
        )}
       
        <ResultTitle>{data.title}</ResultTitle>
  
        <Divider />
        <CardContainer>
        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
           <img src="./img/icon4.png" alt="사진"
           style={{height:'40px', width: '40px', marginRight: '20px'}}/>
            내 감정 요약
          </CardTitle>
          <CardContent>{data.summary}</CardContent>
        </CardContainer>
  
        <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />
  
        <Divider />
        <CardContainer>
        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./img/icon1.png" alt="사진"
                     style={{height:'40px', width: '40px', marginRight: '20px'}}/>
        
            감성일기장
          </CardTitle>
          <CardContent>{data.emotional_content}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./img/icon5.png" alt="사진"
                     style={{height:'40px', width: '40px', marginRight: '20px'}}/>

            내가 느낀 감정
          </CardTitle>
          <CardContent>{data.emotional_result}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./img/icon3.png" alt="사진"
                     style={{height:'40px', width: '40px', marginRight: '20px'}}/>


            심리 분석
          </CardTitle>
          <CardContent>{data.analysis}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./img/icon2.png" alt="사진"
                     style={{height:'40px', width: '40px', marginRight: '20px'}}/>

            GPT 조언
          </CardTitle>
          <CardContent>
            {data.action_list.map((action, index) => (
              <ActionListItem key={index}>{action}</ActionListItem>
            ))}
          </CardContent>
        </CardContainer>

      </DiaryContainer>
    );
  };
  
  export default DiaryDisplay;
  
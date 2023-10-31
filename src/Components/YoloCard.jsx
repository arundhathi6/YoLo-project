import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import './YoloCard.css'
import Freeze from '../assets/freez.svg'
import RedFreeze from '../assets/redfreez.svg'
import FreezeBackground from '../assets/freez.png'
import Yolo from '../assets/yolo.svg'
import YesBank from '../assets/yesbank.svg'
import Zline from '../assets/zline.svg'
import UPI from '../assets/upi.svg'
import CVVimg from '../assets/cvv.svg'
import CopyImg from '../assets/copy.svg'
import BackGround from '../assets/black.svg'
import Eclipse from '../assets/rectangle-28.svg'
import EclipsePart from '../assets/rectangle-29.svg'
import CircleOne from '../assets/circle.svg'
import YoloPay from '../assets/scan.svg'
import Home from '../assets/home.svg'
import Ginie from '../assets/ginie.svg'
import { faker } from '@faker-js/faker';

const YoloCard = () => {
  const [freeze, setFreeze] = useState(false)

  const handleClick = () => {
    setFreeze(!freeze)
  }

  const creditCardData = {
    cardNumber: faker.finance.creditCardNumber({ issuer: '63[7-9]#-####-####-###L' }).split('-').map(Number),
    cardCvv: faker.finance.creditCardCVV(),
    cardExpiry: '01/28'
  }

  return (
    <div>
      <Card className='yolo_card' sx={{ backgroundColor: '#0d0d0d' }} align='center' padding={4}>
        <CardHeader >
          <Heading className='heading_box' size='md'>select payment mode</Heading>
        </CardHeader>
        <CardBody>
        <Box className='text_box'>
          <Text>choose your preferred payment method to make payment.</Text>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', width: '328px', height: '40px', marginTop: '7%' }}>
          <button className='yolo_btn'>pay</button>
          <button className='yolo_btn'>card</button>
        </Box>
        <Box marginTop={10}>
          <Text className='text_box_1'>your digital debit card</Text>
          <Box display={"flex"} gap='5px' alignContent={"center"}>
            <Box className='cardDetail_box' w={186} h={296} borderRadius={"16px"} style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" }}>
              <Box className='cardDiv'>
                {freeze ? (
                  <>
                    <div style={{ position: 'relative', height: 'auto' }}>
                      <img src={BackGround} alt="" style={{ borderRadius: "16px",opacity:'95%' }} width="100%" height="100%" />
                      <div className='card_sub_div'>
                        <div className='card_sub_child_div'>
                          <img src={Yolo} width="48px" height="15px" />
                          <img src={YesBank} alt="" width={"48px"} height="20px" />
                        </div>
                        <div style={{ display: "flex", position: "absolute", top: "90px", left: "20px" }}>
                          <div width="50px" height="100px">
                            {creditCardData.cardNumber.map((item, index) => {
                              return (
                                <>
                                  <Text className="text_font" style={{ color: "white" }}>{item}</Text>
                                  {index != 3 && <img src={Zline} alt="" style={{ marginTop: "-15px" }} width="54px" height="40px" />}
                                </>
                              )
                            })}
                          </div>
                          <div>
                            <div>
                              <Text className="text_expiry">
                                expiry
                              </Text>
                              <Text className="text_expiry1">
                                01/28
                              </Text>
                            </div>
                            <div>
                              <Text className="text_cvv">CVV</Text>
                              <img src={CVVimg} alt="" width="65px" style={{ marginLeft: "30px" }} />
                            </div>
                          </div>
                        </div>
                        <div className="copy_div">
                          <img src={CopyImg} alt="" />
                          <Text className="text_copy">copy details</Text>
                        </div>
                        <img src={UPI} alt="" className='upi_img' width={"20px"} height={"20px"} />
                      </div>
                      <Box>
                      </Box>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ position: 'relative', height: 'auto' }}>
                      <img src={FreezeBackground} alt="" style={{ borderRadius: "16px" }} width="100%" height="100%" />
                    </div>
                  </>
                )}
              </Box>
            </Box>
            <Box w={130} h={296} borderRadius={"16px"}>
              <button style={{ width: '60px', height: '60px', textAlign: 'center', marginTop: '100px', marginLeft: '-50px' }} className='yolo_btn' onClick={handleClick}>
                <img style={{ marginLeft: '10px' }} src={freeze ? (Freeze) : (RedFreeze)} />
              </button>
              <Text className='freeze_unfreeze_txt' sx={{ color: freeze ? 'white' : "red" }}>{freeze ? "freeze" : "unfreeze"}</Text>
            </Box>
          </Box>
        </Box>
        <Box className="bottom_div" >
          <img className="property" alt="" src={EclipsePart} />
          <img
            alt=""
            width={"100%"} height="100%"
            src={Eclipse}
          />
          <Box className='botton_btns'>
            <Box>
            <button className='home_btn'>
            <img alt="" src={Home} width={"41px"} height={"41px"} />
            </button>
            <Text className='bottom_text'>home</Text>
            </Box>
            <Box>
            <button className='yolopay_btn'>
            <img alt="" src={YoloPay} width={"51px"} height={"51px"} />
            </button>
            <Text className='bottom_text' style={{opacity:'100%'}}>yolo pay</Text>
            </Box>
            <Box>
            <button className='ginie_btn'>
            <img alt="" src={Ginie} width={"41px"} height={"41px"} />
            </button>
            <Text className='bottom_text'>ginie</Text>
            </Box>
          </Box>
        </Box>
        </CardBody>
      </Card>
    </div>
  )
}

export default YoloCard
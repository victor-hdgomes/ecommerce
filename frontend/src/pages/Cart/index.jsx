// Styles
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button
} from './styles'

// Components
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// MUI
import { Add, Remove } from '@mui/icons-material'

const Cart = () => {
  return (
    <Container>

      <Announcement />

      <Navbar />

      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping bag &#40;2&#41;</TopText>
            <TopText>Your Wishlist &#40;0&#41;</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>

        <Bottom>
          <Info>
          <Product>
              <ProductDetail>
                <Image src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1603739403&ims=544x" />
                <Details>
                  <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID: </b>1231564684321</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size: </b>37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr/>

            <Product>
              <ProductDetail>
              <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName><b>Product: </b>HAKURA T-SHIRT</ProductName>
                  <ProductId><b>ID: </b>1231564684321</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize><b>Size: </b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />

    </Container>
  )
}

export default Cart

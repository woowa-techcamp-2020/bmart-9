import { HorizontalBar } from '../components/HorizontalBar';
import { Carousel } from '../components/Carousel';
import { PromotionImgDataProps } from './../components/Carousel/Carousel';
import { HorizontalCardSet } from '../components/HorizontalCardSet';
import { MainCategorySet } from '../components/MainCategorySet';
import { PullToRefresh } from '../components/PullToRefresh';
import { GridCardSet } from '../components/GridCardSet';
import { ShowcaseCardSet } from '../components/ShowcaseCardSet';
import { CardSetWithCategory } from '../components/CardSetWithCategory';
import { MainFooter } from '../components/MainFooter';

const promotionImgData : PromotionImgDataProps[] = [
	{id: 1, imgSrc: "https://images.unsplash.com/photo-1554774853-b3d587d95440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3526&q=80"},
	{id: 2, imgSrc: "https://images.unsplash.com/photo-1585840888857-a83673aad0f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"},
	{id: 3, imgSrc: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
	{id: 4, imgSrc: "https://images.unsplash.com/photo-1597346906996-ab57d9b27dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
	{id: 5, imgSrc: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
	{id: 6, imgSrc: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"},
	{id: 7, imgSrc: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80"},
	{id: 8, imgSrc: "https://images.unsplash.com/photo-1597541711530-c9cab34d8937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
	{id: 9, imgSrc: "https://images.unsplash.com/photo-1597557316151-a79617e6d3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"},
	{id: 10, imgSrc: "https://images.unsplash.com/photo-1597513901462-48cb0a4055f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"}
]

const data : CardProps[] = [
	{id: 1, imgSrc: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png", productData: { productName: "초보탈출 리액트", productDiscountRate:99, productBasePrice: 1000, productPrice:80}},
	{id: 2, imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61aOa%2B4v4IL._AC_SL1240_.jpg", productData: { productName: "맥 딜리버리", productDiscountRate:99, productBasePrice: 1000, productPrice:110}},
	{id: 3, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:50, productBasePrice: 2000, productPrice:130}},
	{id: 4, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 5, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:0, productBasePrice: 9000, productPrice:9000}},
	{id: 6, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:10, productBasePrice: 1000, productPrice:900}},
	{id: 7, imgSrc: "https://gd.image-gmkt.com/li/143/151/648151143.g_520-w_g.jpg", productData: { productName: "해피퍼킹 키보드", productDiscountRate:0, productBasePrice: 0, productPrice:0}},
]

const MainPage = () => (
  <>
    <HorizontalBar start='아이콘(<-)' center='로고(B마트)' end='아이콘(햄버거)' />
    <PullToRefresh/>
    <Carousel promotionImgData={promotionImgData}/>
    <MainCategorySet />
    <HorizontalCardSet data={data}/>
    <ShowcaseCardSet/>
    <Carousel promotionImgData={promotionImgData}/>
    <GridCardSet/>
    <HorizontalCardSet data={data}/>
    <HorizontalCardSet data={data}/>
    <Carousel promotionImgData={promotionImgData}/>
    <CardSetWithCategory/>
    <MainFooter/>
  </>
);

export default MainPage;

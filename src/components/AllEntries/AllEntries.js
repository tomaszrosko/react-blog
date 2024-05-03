import React from 'react';
import './AllEntries.scss';
import Bar from '../Bar/Bar';
import Title from '../AboutMe/components/Title';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Ratio, Row} from "react-bootstrap";
// import Articles from '../../assets/data/pl/entries.json';
import Articles from './DataEntries' ;
import AboutMe from "../AboutMe/AboutMe";
import {Link} from "react-router-dom";

const reverseArticles = Articles.reverse();

function GetReverseArticles() {
    return (
        reverseArticles.map(article => {
            let ratioEntry = (article.heightMin / article.widthMin * 100);
            const path = `/entry/${article.id}`;
            return (
                <Row>
                    <Col key={`article-${article.id}`} xs={12} md={6} lg={4}>
                        <Link className={"stretched-link"} to={path}>
                            <Ratio aspectRatio={ratioEntry}>
                                <Card.Img variant="top" width={article.widthMin} height={article.heightMin}
                                          src={article.imageMin}
                                          alt={article.title}
                                          loading="lazy"/>
                            </Ratio>
                        </Link>
                    </Col>
                    <Col key={`article-text-${article.id}`} md={6} lg={8}>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                    </Col>
                </Row>
            )
        })
    )
}

function AllEntries() {

    return (
        <>
            <Title/>
            <Bar/>
            <section className={"c-all-entries"}>
                <Container className={"c-all-entries__box"}>
                    {
                        <GetReverseArticles/>
                    }
                </Container>
            </section>
            <AboutMe/>
        </>
    );
}

export default AllEntries;

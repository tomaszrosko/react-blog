import "./ArticleDetail.scss";
import React from 'react';
import {Col, Ratio, Row} from "react-bootstrap";
import {Link,useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Markdown from 'react-markdown';
import {getArticles} from '../../utils/langUtils';
import Container from "react-bootstrap/Container";
import AboutMe from "../AboutMe/AboutMe";
import NoFound from '../NotFound/notFound';

function ArticleDetail() {
  const {id} = useParams();
  const allArticles = getArticles("pl");
  const findArticle = (id) => {
    return allArticles.find((el) => {
      return el.id === Number(id);
    })
  }

  const article = findArticle(id);
  if (!article) {

    return <NoFound />
  }
  // Destructuring
  const {width, height, image, title, text, tags, linkTitle1, linkTitle, linAlt, linkHref, linkClass } = article;
  let ratioEntry = (height / width * 100);

  const arrText = text.map((arrVal) => {
    return (
      <Markdown>{arrVal}</Markdown>
    )
  })

  const listTags = tags.map((tag) => {
    return (
      <li>{tag}</li>
    )
  })

  function BarPost() {
    return (
      <section className={"c-bar"}>
        <Container>
          <Row>
            <Col xs={12} className={'c-bar__box'}>
              <h2>{title}</h2>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  return (
    <div>
      <BarPost/>
      <section className={"c-article-detail"}>
        <Container>
          <Row>
            <Col xs={12} className={"c-article-detail__photo"}>
              <Ratio aspectRatio={ratioEntry}>
                <Card.Img variant="top" width={width} height={height} src={image}
                          alt={title} title={linkTitle1}
                          loading="lazy"/>
              </Ratio>
            </Col>
            <Col xs={12}>
              <ul className={"list-unstyled tags"}>{listTags}</ul>
            </Col>
            <Col xs={12} lg={8} className={"m-lg-auto"}>
              {arrText}
            </Col>
            <Col xs={12} lg={8} className={"m-lg-auto"}>
              <a href={linkHref} className={linkClass}  alt={linAlt}>{linkTitle}</a>
            </Col>
            <Col xs={12} lg={8} className={"d-flex justify-content-between text-end m-auto py-3 pt-5"}><Link to='/' className={"btn btn-dark"}>Strona główna</Link><Link to='/allEntries' className={"btn btn-dark"}>Wszystkie wpisy</Link></Col>
          </Row>
        </Container>
      </section>
      <AboutMe/>
    </div>
  )
}

export default ArticleDetail;



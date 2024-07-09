import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Section01 from '../components/section01/section01';
import Section02 from '../components/section02/Section02';
import Section03 from '../components/section03/section03';

const IndexPage = () => {
    return (
      <Layout>
        <Section01 />
        <Section02 />
        <Section03 />

      </Layout>
    );
  };
  
export default IndexPage;

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <>
     <title>{data.site.siteMetadata.title}</title>
     <meta name="description" content={data.site.siteMetadata.description} />
    </>
  );
}

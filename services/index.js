import { request, gql } from "graphql-request";

const graphURI =
  "https://api-us-east-1.graphcms.com/v2/ckyifdfsr2v7t01z38vqn19vu/master";

export const getHomeIntro = async () => {
  const query = gql`
    query MyQuery {
      homeIntros {
        id
        title
        videoUrl
      }
    }
  `;
  const result = await request(graphURI, query);
  return result;
};

export const getMovies = async () => {
  const query = gql`
    query MyQuery {
      movies {
        id
        title
        image
        category
      }
    }
  `;
  const result = await request(graphURI, query);
  return result;
};

export const getHomeLowerVid = async () => {
  const query = gql`
    query MyQuery {
      homeLowervideos {
        id
        info
        title
        videourl
      }
    }
  `;
  const result = await request(graphURI, query);
  return result;
};

export const Testimonial = async () => {
  const query = gql`
    query MyQuery {
      homeTestimonials {
        id
        posterUrl
        title
        videoUrl
      }
    }
  `;
  const result = await request(graphURI, query);
  return result;
};

export const getTeam = async () => {
  const query = gql`
    query MyQuery {
      teams {
        id
        name
        imageurl
        role
        detail
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getAwardMovie = async () => {
  const query = gql`
    query MyQuery {
      awardMovies {
        id
        awardYear
        imageUrl
        name
        category
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getAwardCarousel = async () => {
  const query = gql`
    query MyQuery {
      awardCarousels {
        id
        title
        imageUrl
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getEventCarousel = async () => {
  const query = gql`
    query MyQuery {
      eventCarousels {
        id
        imageUrl
        tItle
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getEventJury = async () => {
  const query = gql`
    query MyQuery {
      eventJuries {
        id
        name
        imageUrl
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getEventCard = async () => {
  const query = gql`
    query MyQuery {
      eventCards {
        id
        imageUrl
        info
        visitUrl
        date
        eventName
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

export const getGallery = async () => {
  const query = gql`
    query MyQuery {
      galleries {
        id
        title
        imageUrl
        category
      }
    }
  `;
  const result = await request(graphURI, query);

  return result;
};

// export const getEventTerms = async () => {
//   const query = gql`
//     query MyQuery {
//       eventTerms {
//         id
//         points
//       }
//     }
//   `;
//   const result = await request(graphURI, query);

//   return result;
// };


// new
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import Header from "../material-ui/Header"
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MainFeaturedPost from "../material-ui/MainFeaturedPost";
import Footer from "../material-ui/Footer";
import FeaturedPost from "../material-ui/FeaturedPost";


const theme = createTheme();

const mainFeaturedPost = {
          title: 'MIKE BOWSER',
          description:
            "",
          image: 'https://scontent.fpit1-1.fna.fbcdn.net/v/t1.6435-9/186561358_10111552273393550_3980315867556394921_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yn2RyPWeDK4AX9JJX0c&_nc_oc=AQnB3DvBkZDTt1zRVICRGpzjJWQqNSM5rsZMyov8ipkE2I5nXMNfaeH4QziCeiuLuwQ&_nc_ht=scontent.fpit1-1.fna&oh=00_AfDY0CppyH9emPhaSVRHX1uLld-oN_BzYitD8a3S9CuISw&oe=63DDA89A',
          imageText: 'main image description',
          // linkText: 'Continue reading…',
        };       
        
        const sections = [
          { title: 'HOME', url: '/' },
          { title: 'ABOUT', url: '/about' },
          { title: 'PORTFOLIO', url: '#' },
          { title: 'LINKEDIN', url: '#' },
          { title: 'CONTACT', url: '#' },
];

        const featuredPosts = [
          {
            title: 'Featured post',
            date: 'Nov 12',
            description:
              'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
          },
          {
            title: 'Post title',
            date: 'Nov 11',
            description:
              'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
          },
        ];
        

const About = () => {

          return (
                    <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="lg">
                      <Header title="MIKE BOWSER" sections={sections} />
                      <main style={{display:"flex", flexDirection:"column", justifyContent:"center"}} >
                        <img style={{minHeight:30, minWidth:100, borderRadius:20}} src="https://scontent.fpit1-1.fna.fbcdn.net/v/t1.6435-9/186561358_10111552273393550_3980315867556394921_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yn2RyPWeDK4AX9JJX0c&_nc_oc=AQnB3DvBkZDTt1zRVICRGpzjJWQqNSM5rsZMyov8ipkE2I5nXMNfaeH4QziCeiuLuwQ&_nc_ht=scontent.fpit1-1.fna&oh=00_AfDY0CppyH9emPhaSVRHX1uLld-oN_BzYitD8a3S9CuISw&oe=63DDA89A"/>
                        <Grid container spacing={4}>
                          {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                          ))}
                        </Grid>
                        {/* <Grid container spacing={5} sx={{ mt: 3 }}>
                          <Main title="From the firehose" posts={posts} />
                          <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                          />
                        </Grid> */}
                      </main>
                    </Container>
                    <Footer
                      title="Footer"
                      description="Something here to give the footer a purpose!"
                    />
                  </ThemeProvider>              
          )

}

export default About
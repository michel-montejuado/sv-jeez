import { Link as RouterLink } from "react-router";

import { useTranslation } from "react-i18next";

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";

import Logo from "@/components/branding/Logo.tsx";
import PageBlankLayout from "@/components/layout/PageBlankLayout.tsx";
import PageSection from "@/components/layout/PageSection.tsx";
import SimpleCard from "../components/surfaces/SimpleCard.tsx";
import Carousel from "@/components/surfaces/Carousel.tsx";
import Hero from "@/components/surfaces/Hero.tsx";

import gradient from "@/theme/gradient.ts";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageBlankLayout
      appName={t("application.name")}
      title={t("pages.home.title")}
      description={t("pages.home.description")}
    >
      <Hero
        sx={{
          textAlign: "center",
          my: { xs: 4, md: 20 },
          color: "primary.contrastText",
          backgroundImage: gradient
        }}
      >
        <Logo size="xl" />
        <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>SVJeez</Typography>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>Go Beyond Static. Create Stunning Animated SVGs in Seconds.</Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          From mesmerizing waves to morphing blobs, SVJeez is the modern toolkit for creating lightweight, production-ready vector images and animations.<br />
          No complex software. No lines of code. Just pure creativity.
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4, textAlign: "center" }}>
          Free, forever. No credit card required.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/generators" sx={{ mx: "auto", mb: 4, width: "fit-content" }}>Start Creating</Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Supports all modern browsers.<br />
          Loved by developers and designers.
        </Typography>
      </Hero>
      <PageSection title="Features" subtitle="Your New Design Workflow: Generate. Animate. Export.">
        <Typography variant="body2" sx={{ mb: 4, textAlign: "center" }}>
          Creating jaw-dropping visuals has never been this simple.
        </Typography>
        <Grid container spacing={2} sx={{ pt: 4 }}>
          {[
            {
              title: "Generate Your Perfect Shape",
              description: "Start with our library of versatile presets—waves, blobs, circuits, stacked peaks, and more. Use intuitive sliders to customize every detail until it's perfect.",
              media: {
                image: "https://picsum.photos/seed/generate/1600/900",
                alt: "Generate Your Perfect Shape"
              }
            },
            {
              title: "Bring It to Life",
              description: "This is where the magic happens. Apply one-click animation presets like 'Pulse', 'Flow' or 'Morph'. Fine-tune speed and intensity for a truly custom feel.",
              media: {
                image: "https://picsum.photos/seed/life/1600/900",
                alt: "Bring It to Life"
              }
            },
            {
              title: "Export & Deploy Instantly",
              description: "Grab the highly-optimized SVG code with embedded CSS animations. Just copy, paste, and watch your website or app immediately stand out from the crowd.",
              media: {
                image: "https://picsum.photos/seed/export/1600/900",
                alt: "Export & Deploy Instantly"
              }
            }
          ].map((feature, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4
              }}
            >
              <SimpleCard
                media={feature.media}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </PageSection>
      <PageSection title="Benefits" subtitle="Stop Using Boring Stock Assets. Start Building Unique Experiences.">
        <List sx={{ mx: "auto" }}>
          {[
            {
              icon: <AutoAwesomeRoundedIcon />,
              primary: "Mesmerizing Hero Backgrounds",
              secondary: "Create subtle, looping animations that hook visitors from the first second."
            },
            {
              icon: <DraftsRoundedIcon />,
              primary: "Dynamic Section Dividers",
              secondary: "Transition between content sections with elegant, animated waves and shapes."
            },
            {
              icon: <LayersRoundedIcon />,
              primary: "Interactive Icons & Logos",
              secondary: "Add pulsing or morphing effects to icons on hover to delight your users."
            },
            {
              icon: <PersonRoundedIcon />,
              primary: "Engaging Social Media Content",
              secondary: " Export animations as GIFs or video clips to make your posts impossible to ignore."
            },
            {
              icon: <HourglassBottomRoundedIcon />,
              primary: "Unique Loading Indicators",
              secondary: "Replace generic spinners with a beautifully animated element that reflects your brand."
            }
          ].map((benefit, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>
                {benefit.icon}
              </ListItemIcon>
              <ListItemText primary={benefit.primary} secondary={benefit.secondary} />
            </ListItem>
          ))}
        </List>
      </PageSection>
      <PageSection title="Testimonials" subtitle="Jeez, You're Going to Love This.">
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          We built SVJeez for the creators. Here's what they're saying.
        </Typography>
        <Carousel
          cards={[
            {
              description: "— Alex, Frontend Developer at Nova Corp",
              title: "\"I used to spend hours trying to code simple SVG wave animations. With SVJeez, I got a better result in about 30 seconds. This has fundamentally changed my workflow. It's an absolute game-changer.\"",
              media: {
                image: "https://picsum.photos/seed/alex/1600/900",
                alt: "Alex, Frontend Developer at Nova Corp"
              }
            },
            {
              description: "— Jamie, UI/UX Designer at Creative Studio",
              title: "\"SVJeez has completely transformed the way I approach design. The ability to create complex animations without writing a single line of code is a game-changer.\"",
              media: {
                image: "https://picsum.photos/seed/Jamie/1600/900",
                alt: "Jamie, UI/UX Designer at Creative Studio"
              }
            },
            {
              description: "— Maria, UI/UX Lead at Studio Finch",
              title: "\"As a designer, I can finally create the exact motion I envision without having to bother an engineer. I can design, animate, and get the code myself. The freedom is incredible.\"",
              media: {
                image: "https://picsum.photos/seed/maria/1600/900",
                alt: "Maria, UI/UX Lead at Studio Finch"
              }
            },
            {
              description: "— Sam, Digital Marketer",
              title: "\"Our landing page engagement went up after we replaced our static hero image with an animated background from SVJeez. It just makes the whole site feel more alive and professional.\"",
              media: {
                image: "https://picsum.photos/seed/sam/1600/900",
                alt: "Sam, Digital Marketer"
              }
            }
          ].map((feature, index) => (
            <SimpleCard
              key={index}
              media={feature.media}
              title={feature.title}
              description={feature.description}
            />
          ))}
        />
      </PageSection>
      <PageSection title="Ready to Make Your Designs Move?">
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Stop wrestling with complex tools and tedious code. Unleash your creativity and start building the vibrant, animated web you've always imagined. It's free to get started.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/" sx={{ mx: "auto", mt: 4, width: "fit-content", textAlign: "center" }}>Launch the Generator and Create Your First Animation</Button>
      </PageSection>
    </PageBlankLayout>
  )
}

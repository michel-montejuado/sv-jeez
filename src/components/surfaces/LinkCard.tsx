import { ReactNode } from "react";

import { useNavigate } from "react-router";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { type CardMedia } from "@/types/CardMedia.ts";

export type LinkCardProps = {
  media?: CardMedia;
  title: string;
  description: string;
  to: string;
  children?: ReactNode;
  actions?: ReactNode;
};

export default function LinkCard({ media, title, description, to, children, actions }: LinkCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4
      }}
    >
      <CardActionArea onClick={() => navigate(to)}>
        {media &&
          <MuiCardMedia
            component={media.component ? media.component : "img"}
            height="128"
            image={media.image}
            alt={media.alt}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          {children && (
            <>
              <Divider sx={{ my: 2 }} />
              {children}
            </>
          )}
        </CardContent>
      </CardActionArea>
      {actions &&
        <CardActions>
          {actions}
        </CardActions>
      }
    </Card>
  )
}
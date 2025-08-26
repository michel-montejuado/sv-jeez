import { ReactNode } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { type CardMedia } from "@/types/CardMedia.ts";

export type SimpleCardProps = {
  media?: CardMedia;
  title: string;
  description: string;
  children?: ReactNode;
  actions?: ReactNode;
};

export default function SimpleCard({ media, title, description, children, actions }: SimpleCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4
      }}
    >
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
      {actions &&
        <CardActions>
          {actions}
        </CardActions>
      }
    </Card>
  )
}
import { Breadcrumbs, Card, CardContent, CardHeader, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function About() {
    return (
        <>
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                p: 3,
            }}
        >
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">Home</Link>
                <Typography color="text.primary">About</Typography>
            </Breadcrumbs>
            <Card sx={{
                width: "100%",
                maxWidth: "600px",
                height: "600px",
                p: 2,
                my: 2,
            }}>
                <CardHeader title="About page" />
                <CardContent>
                    <Typography variant="h4">Author: <Link href="https://github.com/deokgonkim" target="_blank">deokgonkim</Link></Typography>
                    <Typography variant="h4">CreatedAt: 2025-03-11</Typography>
                </CardContent>
            </Card>
        </Container>
        </>
    )
}

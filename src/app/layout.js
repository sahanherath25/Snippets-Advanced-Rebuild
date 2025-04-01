import "./globals.css";
import {ThemeProvider} from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from "../theme"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog Snippet App",
    description: "Blade Production",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`flex flex-col min-h-screen`}
        >
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Header/>
                {children}
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}

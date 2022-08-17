import React from 'react';
import {Content, Header} from "./components";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header/>
            <Content/>
        </QueryClientProvider>
    );
}

export default App;

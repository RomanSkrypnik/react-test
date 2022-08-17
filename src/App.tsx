import React from 'react';
import {Header} from "./components";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header/>
        </QueryClientProvider>
    );
}

export default App;

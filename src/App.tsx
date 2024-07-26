import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import jsonServerDataProvider from "@refinedev/simple-rest";
import {ErrorComponent,ThemedLayoutV2,ThemedSiderV2,useNotificationProvider,} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import routerBindings, {DocumentTitleHandler,NavigateToResource,UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {BlogPostCreate,BlogPostEdit,BlogPostList,BlogPostShow,} from "./pages/blog-posts";
import {CategoryCreate,CategoryEdit,CategoryList,CategoryShow,} from "./pages/categories";
import {ProfessorCreate,ProfessorEdit,ProfessorList,ProfessorShow,} from "./pages/professores";
import {ProducoesCreate,ProducoesEdit,ProducoesList,ProducoesShow,} from "./pages/producoes";
import { DashboardPage } from "./pages/dashboard";



function App() {
  const API_URL = "https://api.pecs.refine.dev";
  const dataProvider = jsonServerDataProvider(API_URL);
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                dataProvider={dataProvider}
                resources={[
                  {name: "dashboard",
                    list: "/dashboard",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "blog_posts",
                    list: "/blog-posts",
                    create: "/blog-posts/create",
                    edit: "/blog-posts/edit/:id",
                    show: "/blog-posts/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "professores",
                    list: "/professores",
                    create: "/professores/create",
                    edit: "/professores/edit/:id",
                    show: "/professores/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "producoes",
                    list: "/producoes",
                    create: "/producoes/create",
                    edit: "/producoes/edit/:id",
                    show: "/producoes/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                 
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "0hOaVN-2GOoAC-8n2Kvo",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/professores">
                      <Route index element={<ProfessorList />} />
                      <Route path="create" element={<ProfessorCreate />} />
                      <Route path="edit/:id" element={<ProfessorEdit />} />
                      <Route path="show/:id" element={<ProfessorShow />} />
                    </Route>
                    <Route path="/producoes">
                      <Route index element={<ProducoesList />} />
                      <Route path="create" element={<ProducoesCreate />} />
                      <Route path="edit/:id" element={<ProducoesEdit />} />
                      <Route path="show/:id" element={<ProducoesShow />} />
                    </Route>
                    <Route path="/dashboard">
                      <Route index element={<DashboardPage/>} />
                      
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

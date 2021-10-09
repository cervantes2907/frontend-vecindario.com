import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navigation";
import LandingPage from "./pages/LandingPage";
import PostDetails from "./pages/PostDetails";
import { Provider } from "react-redux";
import store from "./store";
import { NewPost } from "./components/forms/NewPost";

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <Navbar />
          <h1 className={styles.title}>Lista De Posts</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/posts/:id">
              <PostDetails />
            </Route>
            <Route exact path="/publicarpost">
              <NewPost />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

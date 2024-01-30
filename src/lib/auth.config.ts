export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      // for logged in users
      const isBagPage = request.nextUrl?.pathname.startsWith("/bag");
      const isKidsPage = request.nextUrl?.pathname.startsWith("/kids");
      const isMenPage = request.nextUrl?.pathname.startsWith("/men");
      const isOrderPage = request.nextUrl?.pathname.startsWith("/order");
      const isPaymentPage = request.nextUrl?.pathname.startsWith("/payment");
      const isProfilePage = request.nextUrl?.pathname.startsWith("/profile");
      const isShippingPage = request.nextUrl?.pathname.startsWith("/shipping");
      const isWishListPage = request.nextUrl?.pathname.startsWith("/wishlist");
      const isWomenPage = request.nextUrl?.pathname.startsWith("/women");

      if (isBagPage && !user) {
        return false;
      }
      if (isKidsPage && !user) {
        return false;
      }
      if (isMenPage && !user) {
        return false;
      }
      if (isPaymentPage && !user) {
        return false;
      }
      if (isProfilePage && !user) {
        return false;
      }
      if (isShippingPage && !user) {
        return false;
      }
      if (isWishListPage && !user) {
        return false;
      }
      if (isWomenPage && !user) {
        return false;
      }
      if (isOrderPage && !user) {
        return false;
      }

      // for not authenticatde users
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnSignUpPage = request.nextUrl?.pathname.startsWith("/signup");

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      if (isOnSignUpPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};

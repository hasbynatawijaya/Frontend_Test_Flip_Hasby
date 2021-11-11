import { MainLayout } from "../views/components/Layout";
import { TransactionsPage, TransactionDetailsPage } from "../views/pages";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TransactionsPage />,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
        children: [
          {
            path: ":transactionId",
            element: <TransactionDetailsPage />,
          },
        ],
      },
    ],
  },
];

export default routes;

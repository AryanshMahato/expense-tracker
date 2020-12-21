import { FC } from "react";
import { render } from "@testing-library/react";

const Providers: FC = ({ children }) => {
	return <>{children}</>;
};

const customRender = (ui, options = {}): ReturnType<typeof render> =>
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

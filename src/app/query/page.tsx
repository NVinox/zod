import { Query } from "@/views/query";

import { QuerySchema, TQuery } from "@/views/query/types";

export default function QueryPage(parameters: {
	params: Record<string, string | number>;
	searchParams: TQuery;
}) {
	const { error } = QuerySchema.safeParse(parameters.searchParams);

	return <Query data={error?.message || parameters.searchParams} />;
}

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import ApiTabs from "@theme/ApiTabs";
import Details from "@theme/Details";
import Markdown from "@theme/Markdown";
import ResponseHeaders from "@theme/ResponseHeaders";
import ResponseSchema from "@theme/ResponseSchema";
import TabItem from "@theme/TabItem";

type StatusCodesProps = {
  label?: string;
  id?: string;
  responses?: Record<
    string,
    {
      description?: string;
      headers?: unknown;
      content?: unknown;
    }
  >;
};

export default function StatusCodes({
  label,
  id,
  responses,
}: StatusCodesProps): React.ReactElement | null {
  if (!responses) return null;
  const codes = Object.keys(responses);
  if (codes.length === 0) return null;

  return (
    <ApiTabs label={label} id={id}>
      {codes.map((code) => {
        const response = responses[code];
        const responseHeaders = response.headers;
        return (
          <TabItem key={code} label={code} value={code}>
            <div>
              {response.description && (
                <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                  <Markdown>{response.description}</Markdown>
                </div>
              )}
              {responseHeaders && (
                <Details
                  className="openapi-markdown__details"
                  data-collapsed={true}
                  open={false}
                  style={{ textAlign: "left", marginBottom: "1rem" }}
                  summary={
                    <summary>
                      <strong>
                        <Translate id="openapi.responseHeaders">
                          Response Headers
                        </Translate>
                      </strong>
                    </summary>
                  }
                >
                  <ResponseHeaders responseHeaders={responseHeaders} />
                </Details>
              )}
              <ResponseSchema
                title={translate({
                  id: "openapi.schemaTitle",
                  message: "Schema",
                })}
                body={{ content: response.content }}
              />
            </div>
          </TabItem>
        );
      })}
    </ApiTabs>
  );
}

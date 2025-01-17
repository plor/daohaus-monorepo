/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Types from '../schema-lens.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ListProfileQueryVariables = Types.Exact<{
  memberAddress: Types.Scalars['EthereumAddress'];
}>;

export type ListProfileQuery = {
  profiles: {
    items: Array<{
      id: any;
      name?: string | undefined;
      bio?: string | undefined;
      followNftAddress?: any | undefined;
      metadata?: any | undefined;
      isDefault: boolean;
      handle: any;
      ownedBy: any;
      picture?:
        | {
            __typename: 'MediaSet';
            original: { url: any; mimeType?: any | undefined };
          }
        | {
            __typename: 'NftImage';
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
          }
        | undefined;
      coverPicture?:
        | {
            __typename: 'MediaSet';
            original: { url: any; mimeType?: any | undefined };
          }
        | {
            __typename: 'NftImage';
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
          }
        | undefined;
      onChainIdentity: { ens?: { name?: any | undefined } | undefined };
    }>;
    pageInfo: {
      prev?: any | undefined;
      next?: any | undefined;
      totalCount: number;
    };
  };
};

export const ListProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'memberAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'EthereumAddress' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profiles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'ownedBy' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'memberAddress' },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '10' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followNftAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metadata' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isDefault' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'picture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'NftImage' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'contractAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uri' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'verified' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'MediaSet' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'original' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'url' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'mimeType',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'handle' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverPicture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'NftImage' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'contractAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uri' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'verified' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'MediaSet' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'original' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'url' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'mimeType',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownedBy' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'onChainIdentity' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ens' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListProfileQuery, ListProfileQueryVariables>;

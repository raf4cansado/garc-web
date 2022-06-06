import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function pdfProduto(listProdutos) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const titulo = [
        {
            text: 'Lista de Produtos',
            alignment: 'center',
            fontSize: 20,
            bold: true,
            margin: [12, 20, 0, 45]
        }
    ];

    const dados = listProdutos.map((item) => {
        return [
            { text: item.id_produto, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
            { text: item.nome_produto, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
            { text: item.marca, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
            { text: item.tipo_produto, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
            { text: item.codigo_barras, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
            { text: item.quantidade, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] }
        ]
    });

    const detalhes = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Código', style: 'tableHeader', fontSize: 10 },
                        { text: 'Produto', style: 'tableHeader', fontSize: 10 },
                        { text: 'Marca', style: 'tableHeader', fontSize: 10 },
                        { text: 'Tipo Produto', style: 'tableHeader', fontSize: 10 },
                        { text: 'Cod. de Barras', style: 'tableHeader', fontSize: 10 },
                        { text: 'Quantidade', style: 'tableHeader', fontSize: 10 }
                    ],
                    ...dados
                ]

            },
            layout: 'lightHorizontalLines'            //'headerLineOnly'
        }
    ];

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]

    };

    const docDefinicao = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [titulo],
        content: [detalhes],
        footer: Rodape

    }

    pdfMake.createPdf(docDefinicao).download();
}

export default pdfProduto
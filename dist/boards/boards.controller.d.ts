import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardsService);
    getAllBarod(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
    getBoardById(id: string): Board;
    deleteBoard(id: string): void;
    updateBoardStatus(id: string, status: BoardStatus): Board;
}

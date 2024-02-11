import { getDataFromToken } from "@/helpers/getDataFomToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"
import {connect} from '@/dbConfig/dbConfig'